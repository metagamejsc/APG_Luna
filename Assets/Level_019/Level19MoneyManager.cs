using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class Level19MoneyManager : MonoBehaviour
{
    [SerializeField] private TextMeshProUGUI moneyText;
    [SerializeField] private int currentMoney = 9999;

    private float duration = .4f;
    private float timeLeft = .4f;
    private int currentNumber;
    private int targetMoney;
    private Coroutine reduceCoroutine;

    private void Start()
    {
        UpdateMoneyText(currentMoney);
    }

    public void Reduce(int money)
    {
        targetMoney = Mathf.Max(0, currentMoney - money);

        if (reduceCoroutine != null)
        {
            StopCoroutine(reduceCoroutine);
        }

        timeLeft = duration;
        reduceCoroutine = StartCoroutine(ReduceMoney());
    }

    private IEnumerator ReduceMoney()
    {
        while (timeLeft > 0)
        {
            timeLeft -= Time.deltaTime;

            currentNumber =
                Mathf.FloorToInt(currentMoney - ((currentMoney - targetMoney) * (duration - timeLeft) / duration));
            UpdateMoneyText(currentNumber);

            yield return null;
        }

        reduceCoroutine = null;
        timeLeft = duration;
        currentMoney = targetMoney;
        UpdateMoneyText(currentMoney);
    }

    private void UpdateMoneyText(int amount)
    {
        if (moneyText == null)
        {
            return;
        }

        if (amount == 0)
        {
            moneyText.text = "0$";
            return;
        }

        moneyText.text = "-" + amount.ToString("N0") + "$";
    }
}
