using UnityEngine;
using UnityEngine.UI;

namespace Playable
{
    public class BG : Target
    {
        [SerializeField] private Image _bg;
        [SerializeField] private Sprite _sprite;

        public override void Play()
        {
            base.Play();
            _bg.sprite = _sprite;
        }
    }
}