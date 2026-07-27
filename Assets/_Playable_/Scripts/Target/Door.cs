using Spine.Unity;
using UnityEngine;

namespace Playable
{
    public class Door : Target
    {
        [SerializeField] private SkeletonGraphic _skeleton;

        [SpineAnimation(dataField: nameof(_skeleton))] [SerializeField]
        private string _animName;

        [SerializeField] private GameObject _door;

        public override void Play()
        {
            base.Play();
            _door.SetActive(false);
            _skeleton.AnimationState.SetAnimation(0, _animName, true);
        }
        
    }
}