using Spine.Unity;
using UnityEngine;

namespace Playable
{
    public class Computer : Target
    {
        [SerializeField] private SkeletonGraphic _skeleton;

        [SpineAnimation(dataField: nameof(_skeleton))][SerializeField]
        private string _animName;

        [SerializeField] private GameObject _computerOld;
        [SerializeField] private GameObject _computer;

        public override void Play()
        {
            base.Play();
            _computerOld.SetActive(false);
            _skeleton.gameObject.SetActive(true);
            _skeleton.AnimationState.SetAnimation(0, _animName, true);
        }

        public override void Stop()
        {
            if(!IsCompleted) return;
            base.Stop();
            _skeleton.gameObject.SetActive(false);
            _computer.SetActive(true);
        }
    }
}