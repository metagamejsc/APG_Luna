using Spine.Unity;
using UnityEngine;

namespace Playable
{
    public class Bathroom : Target
    {
        [SerializeField] private SkeletonGraphic _skeleton;

        [SpineAnimation(dataField: nameof(_skeleton))] [SerializeField]
        private string _animName;

        [SerializeField] private GameObject _mirror;
        [SerializeField] private GameObject _bathroom;
        [SerializeField] private AudioClip _clip;

        public override void Play()
        {
            base.Play();
            _mirror.SetActive(false);
            _skeleton.gameObject.SetActive(true);
            _skeleton.AnimationState.SetAnimation(0, _animName, true);
            AudioManager.Instance.PlaySound(_clip);
        }

        public override void Stop()
        {
            if (!IsCompleted) return;
            base.Stop();
            _skeleton.gameObject.SetActive(false);
            _bathroom.SetActive(true);
        }
    }
}