using UnityEngine;

namespace Playable
{
    public class Ceiling : Target
    {
        [SerializeField] private GameObject _fan;
        [SerializeField] private GameObject _airCondition;
        [SerializeField] private AudioClip _clip;

        public override void Play()
        {
            base.Play();
            _fan.SetActive(false);
            _airCondition.SetActive(true);
            AudioManager.Instance.PlaySound(_clip);
        }
    }
}