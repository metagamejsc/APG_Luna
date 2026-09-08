using System.Collections.Generic;
using UnityEngine;

public class ActiceOtherOnActive : MonoBehaviour
{
    [SerializeField] private GameObject activeObject;
    [SerializeField] private float delay;
    private void Start()
    {
        Invoke(nameof(ActiveOther), delay);
    }
    private void ActiveOther()
    {
        activeObject.SetActive(true);
    }
}

