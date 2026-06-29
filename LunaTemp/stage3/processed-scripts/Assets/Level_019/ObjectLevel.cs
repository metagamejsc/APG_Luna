using Spine;
using Spine.Unity;
using UnityEngine;

public class ObjectLevel : MonoBehaviour
{
    [SerializeField] private SkeletonAnimation _anim;

    [SerializeField, SpineAnimation(dataField = "_anim")]
    private string _firstAnimName;

    [SerializeField, SpineAnimation(dataField = "_anim")]
    private string _secondAnimName;

    [SerializeField] private bool _isDone;
    [SerializeField] private int _price;
    [SerializeField] private AudioSource _audio;
    [SerializeField] private Level19MoneyManager _money;
    [SerializeField] private GameObject _dog1;
    [SerializeField] private GameObject _dog2;

    public bool IsDone => _isDone;

    public int SortingOrder
    {
        get
        {
            if (_anim == null)
            {
                return int.MinValue;
            }

            var renderer = _anim.GetComponent<Renderer>();
            return renderer != null ? renderer.sortingOrder : int.MinValue;
        }
    }

    public void Collect()
    {
        if (_isDone)
        {
            return;
        }

        _isDone = true;
        _money.Reduce(_price);
        PlaySequentialAnimations();
        _audio.Play();
    }

    private void PlaySequentialAnimations()
    {
        if (_anim == null || _anim.AnimationState == null)
            return;

        if (string.IsNullOrEmpty(_firstAnimName))
            return;

        _anim.AnimationState.SetAnimation(0, _firstAnimName, false);

        if (!string.IsNullOrEmpty(_secondAnimName))
            _anim.AnimationState.AddAnimation(0, _secondAnimName, true, 0f);

        if (_dog1 != null && _dog2 != null)
        {
            _dog1.SetActive(true);
            _dog2.SetActive(false);
        }

        if (LunaManager.ins != null)
            LunaManager.ins.CountPlay();
    }
}