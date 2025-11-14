using System;
using System.Collections.Generic;
using System.Threading;
using UnityEngine;
using UnityEngine.UI;
using Random = System.Random;

public class Level34Manager : MonoBehaviour
{
    [SerializeField] private Button sleepButton;
    /*[SerializeField] private List<VisualAction> actions;
    [SerializeField] private VisualAction trueAction;
    [SerializeField] private VisualAction falseAction;
    [SerializeField] private List<VisualAction> failActions;

    private void OnEnable()
    {
        sleepButton.onClick.AddListener(Sleep);
    }

    private bool CheckActions()
    {
        for (int i = 0; i < actions.Count; i++)
        {
            if (!actions[i].Completed)
            {
                return false;
            }
        }
        
        return true;
    }

    private async void Sleep()
    {
        sleepButton.gameObject.SetActive(false);
        
        if (CheckActions())
        {
            trueAction.Execute(CancellationToken.None);
        }
        else
        {
            Random random = new Random();
            var index = random.Next(0, failActions.Count - 1);
            
            await failActions[index].Execute(CancellationToken.None);
            await falseAction.Execute(CancellationToken.None);
        }
    }*/
    
}
