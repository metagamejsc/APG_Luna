using UnityEngine;
using UnityEngine.Events;

namespace Playable
{
    [DisallowMultipleComponent]
    public class Target : MonoBehaviour
    {
        [SerializeField] private UnityEvent _onPlay;
        [SerializeField] private AudioSource _source;
        private bool _isCompleted;

        public bool IsCompleted => _isCompleted;

        public virtual void Play()
        {
            _onPlay?.Invoke();
            _isCompleted = true;
            GameManager.Instance.CountEvent();
            _source.Play();
        }

        public virtual void Stop()
        {
        }
    }
}