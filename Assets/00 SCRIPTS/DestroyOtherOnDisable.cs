using UnityEngine;

public class DestroyOtherOnDisable : MonoBehaviour
{
    [SerializeField] private GameObject destroyObject;
    [SerializeField] private float delay;
    private void OnDisable()
    {
        if (destroyObject && destroyObject.activeSelf) Invoke(nameof(DestroyOther), delay);
    }
    private void DestroyOther()
    {
        Destroy(destroyObject);
    }
}
