using Spine.Unity;
using UnityEngine;

namespace Playable
{
    public class Bed : Target
    {
        [SerializeField] private SkeletonGraphic _skeleton;

        [SpineAnimation(dataField: nameof(_skeleton))] [SerializeField]
        private string _animName;

        [SerializeField] private GameObject _bed;
        [SerializeField] private AudioClip _clip;

        public override void Play()
        {
            base.Play();
            _skeleton.AnimationState.SetAnimation(0, _animName, true);
            AudioManager.Instance.PlaySound(_clip);
        }

        public override void Stop()
        {
            if(!IsCompleted) return;
            base.Stop();
            _skeleton.gameObject.SetActive(false);
            _bed.SetActive(true);
        }
    }
}