using UnityEngine;

public class DestroyOtherOnActive : MonoBehaviour
{
    [SerializeField] private GameObject destroyObject;
    [SerializeField] private float delay;
    private void Start()
    {
        if (destroyObject && destroyObject.activeSelf) Invoke(nameof(DestroyOther), delay);
    }
    private void DestroyOther()
    {
        Destroy(destroyObject);
    }
}
