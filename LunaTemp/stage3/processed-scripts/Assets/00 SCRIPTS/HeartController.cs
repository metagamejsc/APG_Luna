using System.Collections.Generic;
using UnityEngine;

public class HeartController : MonoBehaviour
{
    [SerializeField] private RectTransform parent;
    [SerializeField] private GameObject heartPrefab;
    private Queue<GameObject> hearts;
    public void Init(int num)
    {
        hearts = new Queue<GameObject>();
        for (int i = 0; i < num; i++)
        {
            GameObject heart = Instantiate(heartPrefab, parent);
            hearts.Enqueue(heart);
        }
    }

    public void Fail()
    {
        if (hearts.Count <= 0)
        {
            GameController.Ins.GameOver();
            return;
        }
        GameObject heart = hearts.Dequeue();
        Destroy(heart);
    }
}
