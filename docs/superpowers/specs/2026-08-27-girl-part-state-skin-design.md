# Girl: kéo thả theo part, state của Body, và skin theo (part, state)

Ngày: 2026-08-27
Nhánh: BEQ_V34
Phạm vi: `Assets/_Playable_/Scripts/Girl.cs`, `Assets/_Playable_/Scripts/Item.cs`, file mới `Assets/_Playable_/Scripts/GirlDropZone.cs`

## 1. Mục tiêu

Người chơi kéo các `Item` thả vào nhân vật `Girl`. Girl chia làm 3 vùng thả: Head, Body, Leg. Thân Girl có 3 trạng thái: Yellow, Fat, Thin. Mỗi lần thả thành công, Girl đổi skin và chạy animation tương ứng.

Giữ nguyên, không sửa:

- Cơ chế kéo thả của `Item`: `OnBeginDrag`, `OnDrag`, `CacheStartState`, `ResetToStartState`, `CompleteDrop`.
- Logic nhận của Girl: `Accept(bool isLose)`, `PlayAnimBoy(bool)`, `OnPointerClick`, cờ `_isStart`.

## 2. Quyết định thiết kế đã chốt

| # | Quyết định | Lý do |
|---|---|---|
| D1 | Skin định nghĩa theo `(part, state)`, thuộc về Girl. Animation định nghĩa theo `(itemId, part, state)`. | Skin là ngoại hình của Girl; item chỉ quyết định Girl phản ứng thế nào. |
| D2 | Thứ tự các lượt thả của một item là tùy ý. | Người chơi tự do; không khóa Head/Leg chờ Body. |
| D3 | Chỉ có **một** `SkeletonGraphic`. "Part" chỉ là vùng để xác định điểm thả, không phải 3 skeleton riêng. | Yêu cầu trực tiếp từ người dùng. |
| D4 | Mỗi thay đổi → build lại skin từ đầu theo `_currentState` hiện tại. | Đổi state thì các part đã mặc tự cập nhật sang bộ skin của state mới; không bao giờ kẹt skin rác. |
| D5 | Data khai báo bằng 2 list phẳng trên inspector của Girl. | Unity vẽ list-lồng-list rất khó thao tác và dễ điền sai. |
| D6 | `Girl` sở hữu toàn bộ quyết định sau một hàm `TryAccept(...)`; `Item` chỉ lo kéo thả. | Trình tự đổi-state → build-skin → chạy-anim là ngầm định và dễ gọi sai; đóng nó lại trong Girl. |
| D7 | Thiếu `AnimRule` cho `(itemId, part, state)` → vẫn nhận item, bỏ qua animation, ghi `Debug.LogWarning`. | Từ chối sẽ làm playable kẹt nếu quên điền một dòng data. |

## 3. Lỗi hiện có được sửa trong phạm vi này

Code đang dở dang và chưa biên dịch được:

| Vị trí | Lỗi |
|---|---|
| `Girl.cs:122` | `_currentState` chưa khai báo. |
| `Girl.cs:120-127` | Duyệt `List<AnimPartGirl>` nhưng đọc `s.state` / `s.animationName` — sai kiểu. |
| `Item.cs:9-10` | `GirlPart` / `GirlState` là enum lồng trong `Girl`, thiếu prefix `Girl.`. |
| `Item.cs:67,69` | `girl.Part`, `girl.ChangeState()` chưa tồn tại. |
| `Item.cs:65-75` | `_partTarget.Remove(part)` gọi ngay trong `foreach` → `InvalidOperationException`. |
| `Item.cs` | Không có cách xác định item rơi vào Head, Body hay Leg. |

## 4. Kiến trúc

Ba thành phần, mỗi cái một trách nhiệm:

```
Item  ──(raycast)──>  GirlDropZone  ──(tham chiếu)──>  Girl
 │                         │                            │
 │ kéo thả, đếm lượt       │ "vùng này là part nào"     │ state + skin + animation + win/lose
 └────────────────── TryAccept(itemId, part, stateChange, isLose) ──> bool
```

`Item` không biết gì về skin, state hay animation. `Girl` không biết gì về chuột và kéo thả. `GirlDropZone` chỉ là một cái nhãn có thể raycast trúng.

### 4.1 GirlDropZone (file mới)

```csharp
[RequireComponent(typeof(RectTransform))]
public class GirlDropZone : MonoBehaviour
{
    [SerializeField] private Girl _girl;
    [SerializeField] private Girl.GirlPart _part;

    public Girl Girl => _girl;
    public Girl.GirlPart Part => _part;

    private void Reset() => _girl = GetComponentInParent<Girl>();
}
```

Thiết lập scene (người dùng làm bằng tay): 3 GameObject con của Girl tên Head / Body / Leg. Mỗi cái có `Image` với `Color.a = 0` và `Raycast Target` bật, `RectTransform` phủ đúng vùng cơ thể, gắn `GirlDropZone` và chọn `_part`.

### 4.2 Data của Girl

```csharp
public enum GirlPart  { Head, Body, Leg }
public enum GirlState { None, Yellow, Fat, Thin }

[Serializable]
public struct SkinRule
{
    public GirlPart  part;
    public GirlState state;
    [SpineSkin(dataField: nameof(_animGirl))] public string[] skinAdded;
    [SpineSkin(dataField: nameof(_animGirl))] public string[] skinRemoved;
}

[Serializable]
public struct AnimRule
{
    public int       itemId;
    public GirlPart  part;
    public GirlState state;
    [SpineAnimation(dataField: nameof(_animGirl))] public string animationName;
    public bool      loop;
    public AudioClip audioClip;
}
```

Trường serialize trên Girl:

```csharp
[SerializeField] private SkeletonGraphic _animGirl;
[SpineAnimation(dataField: nameof(_animGirl))] [SerializeField] private string _animNameDefault;
[SpineSkin(dataField: nameof(_animGirl))]      [SerializeField] private string[] _skinDefault;
[SerializeField] private GirlState       _startState = GirlState.Yellow;
[SerializeField] private List<SkinRule>  _skinRules;
[SerializeField] private List<AnimRule>  _animRules;
[SerializeField] private AnimDataBoy     _animBoy1;
[SerializeField] private AnimDataBoy     _animBoy2;
```

Chỉ khai báo những dòng thực sự dùng; không bắt buộc điền đủ 3 part × 3 state.

Bỏ hẳn ba struct đang viết dở: `AnimDataGirl`, `AnimPartGirl`, `AnimStateGirl`. Giữ nguyên `AnimDataBoy`.

### 4.3 Trạng thái runtime của Girl

```csharp
private GirlState _currentState;                  // khởi tạo = _startState
private readonly List<GirlPart> _dressedParts;    // các part đã được thả trúng
private Skin _combinedSkin;
private bool _isStart;
```

Không lưu "skin đang bật" nữa — `_activeSkinsGirl` bị bỏ, vì skin luôn được suy ra từ `_dressedParts` + `_currentState`.

### 4.4 Build lại skin

```
RebuildSkin():
    combined.Clear()
    combined += skeleton.Data.DefaultSkin
    combined += _skinDefault
    for part in [Head, Body, Leg] where part in _dressedParts:      # thứ tự cố định
        combined += FindSkinRule(part, _currentState).skinAdded
    for part in [Head, Body, Leg] where part in _dressedParts:
        combined -= FindSkinRule(part, _currentState).skinRemoved
    skeleton.SetSkin(combined)
    skeleton.SetSlotsToSetupPose()
    _animGirl.AnimationState.Apply(skeleton)
    _animGirl.Update(0)
    _animGirl.UpdateMesh()
```

Hai điểm cốt lõi:

- **Add hết rồi mới remove**, và duyệt part theo thứ tự enum cố định chứ không theo thứ tự người chơi thả. Kết quả vì vậy chỉ phụ thuộc `(_dressedParts, _currentState)`, không phụ thuộc lịch sử thao tác.
- Spine không có `Skin.RemoveSkin()`. Phép trừ hiện thực bằng:

```csharp
foreach (Skin.SkinEntry entry in skinToRemove.Attachments)
    combined.RemoveAttachment(entry.SlotIndex, entry.Name);
```

`Skin.Attachments`, `RemoveAttachment`, `SkinEntry.SlotIndex`, `SkinEntry.Name` đều là API công khai — xem `Assets/Spine/Runtime/spine-csharp/Skin.cs:49,106,158,165`. Nhờ trừ ở mức attachment nên `skinRemoved` xóa được cả attachment đến từ default skin.

Chạy sớm là an toàn: `_animGirl.Skeleton` tự gọi `Initialize(false)` (`SkeletonGraphic.cs:465`).

### 4.5 Luồng nhận item

```csharp
public bool TryAccept(int itemId, GirlPart part, GirlState stateChange, bool isLose)
```

1. `_isStart == false` → trả `false` (Girl chưa được click để bắt đầu).
2. `stateChange != GirlState.None` → `_currentState = stateChange`.
3. Thêm `part` vào `_dressedParts` nếu chưa có.
4. `RebuildSkin()`.
5. Tra `AnimRule` theo `(itemId, part, _currentState)`; có thì `SetAnimation` + phát `audioClip`, không có thì `Debug.LogWarning` với đủ ba khóa (theo D7).
6. `Accept(isLose)` — nguyên vẹn logic cũ.
7. Trả `true`.

Trả `false` nghĩa là item phải bay về chỗ cũ.

### 4.6 Item

```csharp
[Serializable]
public struct DropStep
{
    public Girl.GirlPart  part;
    public Girl.GirlState stateChange;   // None = không đổi state
}

[SerializeField] private int _id;
[SerializeField] private List<DropStep> _dropSteps;
[SerializeField] private bool _isLose;

private readonly List<DropStep> _remainingSteps = new List<DropStep>();
```

`stateChange` nằm ở từng lượt thả, không phải ở cấp item: lượt thả vào Body mới cần đổi state, lượt thả vào Head để `None`. Không hard-code luật "chỉ Body mới đổi được state".

`Awake` copy `_dropSteps` sang `_remainingSteps` để list serialize trên inspector không bị sửa lúc chạy.

`OnEndDrag`:

```
if (_isPlaced) return
zone = raycast tìm GirlDropZone đầu tiên
if (zone == null || zone.Girl == null)                    -> ResetToStartState(); return
idx = _remainingSteps.FindIndex(s => s.part == zone.Part)
if (idx < 0)                                              -> ResetToStartState(); return
if (!zone.Girl.TryAccept(_id, zone.Part,
                         _remainingSteps[idx].stateChange, _isLose))
                                                          -> ResetToStartState(); return
_remainingSteps.RemoveAt(idx)
if (_remainingSteps.Count == 0) CompleteDrop() else ResetToStartState()
```

`FindIndex` + `RemoveAt` thay cho `foreach` + `Remove` nên không còn `InvalidOperationException`. Thứ tự tự do (D2): thả trúng bất kỳ part nào còn trong danh sách đều tính.

## 5. Luồng dữ liệu — ví dụ

Girl bắt đầu ở `Yellow`. Item A (`id = 3`) có 2 lượt: `{Head, None}`, `{Leg, None}`. Item B (`id = 7`) có 1 lượt: `{Body, Fat}`.

1. Thả A vào Head → `_dressedParts = [Head]`, state vẫn `Yellow` → skin = default + `_skinDefault` + `SkinRule(Head, Yellow)` → anim tra `(3, Head, Yellow)`. Item A còn 1 lượt, bay về chỗ cũ.
2. Thả B vào Body → `_currentState = Fat`, `_dressedParts = [Head, Body]` → skin build lại: `SkinRule(Head, Fat)` + `SkinRule(Body, Fat)`. Head tự nhảy sang bộ skin của Fat (D4) → anim tra `(7, Body, Fat)`. Item B hết lượt, ẩn đi.
3. Thả A vào Leg → `_dressedParts = [Head, Body, Leg]`, state `Fat` → anim tra `(3, Leg, Fat)`. Item A hết lượt, ẩn đi.

## 6. Xử lý lỗi

| Tình huống | Hành vi |
|---|---|
| Thả ra ngoài mọi drop zone | Item bay về chỗ cũ. |
| Thả trúng zone nhưng part đó không nằm trong lượt còn lại của item | Item bay về chỗ cũ, không có gì thay đổi. |
| Girl chưa `_isStart` | `TryAccept` trả `false`, item bay về chỗ cũ. |
| Thiếu `SkinRule(part, state)` | Bỏ qua phần skin của part đó, im lặng. Không log: `RebuildSkin()` chạy lại sau mỗi lần thả nên warning sẽ lặp liên tục, và không phải part nào cũng cần đổi skin. |
| Thiếu `AnimRule(itemId, part, state)` | Vẫn nhận item, không chạy animation, `Debug.LogWarning` kèm cả ba khóa (D7). |
| Tên skin không có trong skeleton data | `Debug.LogWarning` kèm tên skin, bỏ qua tên đó. |
| `GirlDropZone._girl` chưa gán | `Debug.LogError` một lần trong `Awake` để phát hiện ngay khi vào play mode. |

## 7. Kiểm chứng

Project không có test framework nên nghiệm thu bằng tay trong Unity Editor. Điều kiện chấp nhận:

1. Biên dịch sạch, không warning mới.
2. Thả item ra ngoài Girl → bay về chỗ cũ, không đổi gì.
3. Thả item vào đúng part → skin đổi, animation đúng dòng data, âm thanh phát.
4. Thả item vào sai part → bay về chỗ cũ.
5. Item 2 lượt: lượt 1 xong item vẫn còn trên màn hình; hết lượt cuối mới ẩn.
6. Thả Head trước rồi Body (đổi state) → skin của Head cập nhật theo state mới.
7. Thả Body trước rồi Head → kết quả hình ảnh giống hệt trường hợp 6.
8. `skinRemoved` xóa được attachment vốn đến từ default skin.
9. Item có `_isLose` → `Accept` chạy đúng nhánh thua, `EndGame` sau 2 giây.
10. Chưa click Girl (`_isStart == false`) → mọi thao tác thả đều bị từ chối.

## 8. Ngoài phạm vi

- Không đụng `GameManager`, `GameController`, `AudioManager`, `Door`.
- Không đổi cơ chế tutorial hand.
- Không tạo ScriptableObject cho data (đã cân nhắc và loại — thừa cho một playable ad).
- Không thêm hiệu ứng snap / tween khi thả trúng.
