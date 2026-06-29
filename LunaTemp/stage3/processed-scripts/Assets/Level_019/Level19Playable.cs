using System.Collections.Generic;
using UnityEngine;

public class Level19Playable : MonoBehaviour
{
    public static Level19Playable Instance { get; private set; }

    [SerializeField] private List<Paper> _papers;
    [SerializeField] private List<ObjectLevel> _objects;
    [Header("Tutorial")]
    [SerializeField] private GameObject _hand;
    [SerializeField] private Transform _handStart;
    [SerializeField] private Transform _handEnd;
    [SerializeField] private float _handMoveDuration = 1f;

    private Camera _mainCamera;
    private Collider2D _boxCollider;
    private bool _tutorialDisabled;

    private void Awake()
    {
        Instance = this;
        _boxCollider = GetComponent<Collider2D>();
    }

    private void Start()
    {
        _mainCamera = Camera.main;

        foreach (var paper in _papers)
        {
            if (paper == null)
            {
                continue;
            }

            paper.SetAvailable(false);
        }

        RefreshTopPaper();
        InitializeTutorial();
    }

    private void Update()
    {
        UpdateTutorial();

        while (_papers.Count > 0)
        {
            var lastIndex = _papers.Count - 1;
            var paper = _papers[lastIndex];
            if (paper == null)
            {
                _papers.RemoveAt(lastIndex);
                continue;
            }

            if (paper.IsConsumed)
            {
                _papers.RemoveAt(lastIndex);
                RefreshTopPaper();
                continue;
            }

            return;
        }
    }

    private void RefreshTopPaper()
    {
        for (int i = 0; i < _papers.Count; i++)
        {
            var paper = _papers[i];
            if (paper == null || paper.IsConsumed)
            {
                continue;
            }

            paper.SetAvailable(i == _papers.Count - 1);
        }
    }

    private void InitializeTutorial()
    {
        if (_hand == null)
        {
            _tutorialDisabled = true;
            return;
        }

        if (_handStart != null)
        {
            _hand.transform.position = _handStart.position;
        }

        _hand.SetActive(_handStart != null && _handEnd != null);
        _tutorialDisabled = !_hand.activeSelf;
    }

    private void UpdateTutorial()
    {
        if (_tutorialDisabled)
        {
            return;
        }

        if (_mainCamera == null)
        {
            _mainCamera = Camera.main;
        }

        if (DidPressTopPaper())
        {
            DisableTutorial();
            return;
        }

        if (_hand == null || _handStart == null || _handEnd == null)
        {
            return;
        }

        var duration = Mathf.Max(0.01f, _handMoveDuration);
        var t = Mathf.Repeat(Time.time / duration, 1f);
        _hand.transform.position = Vector3.Lerp(_handStart.position, _handEnd.position, t);
    }

    private bool DidPressTopPaper()
    {
        var topPaper = GetTopPaper();
        if (topPaper == null || !IsPointerBegan())
        {
            return false;
        }

        if (_mainCamera == null)
        {
            return false;
        }

        var worldPosition = _mainCamera.ScreenToWorldPoint(GetPointerScreenPosition());
        return CanGrabTopPaperFromPoint(topPaper, worldPosition);
    }

    private Paper GetTopPaper()
    {
        for (int i = _papers.Count - 1; i >= 0; i--)
        {
            var paper = _papers[i];
            if (paper == null || paper.IsConsumed)
            {
                continue;
            }

            return paper;
        }

        return null;
    }

    private void DisableTutorial()
    {
        _tutorialDisabled = true;
        if (_hand != null)
        {
            _hand.SetActive(false);
        }
    }

    private static bool IsPointerBegan()
    {
        if (Input.touchCount > 0)
        {
            return Input.GetTouch(0).phase == TouchPhase.Began;
        }

        return Input.GetMouseButtonDown(0);
    }

    private static Vector3 GetPointerScreenPosition()
    {
        if (Input.touchCount > 0)
        {
            return Input.GetTouch(0).position;
        }

        return Input.mousePosition;
    }

    public bool CanGrabTopPaperFromPoint(Paper paper, Vector3 worldPosition)
    {
        if (paper == null)
        {
            return false;
        }

        if (paper.CanGrabFromPoint(worldPosition))
        {
            return true;
        }

        var topPaper = GetTopPaper();
        if (topPaper != paper || _boxCollider == null)
        {
            return false;
        }

        var bounds = _boxCollider.bounds;
        worldPosition.z = bounds.center.z;
        return bounds.Contains(worldPosition);
    }

    public List<ObjectLevel> GetObjects()
    {
        return _objects;
    }
}
