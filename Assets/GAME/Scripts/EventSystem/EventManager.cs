using System;
using System.Collections.Generic;
using UnityEngine;

public class EventManager : MonoBehaviour
{
    private Dictionary<Type, List<Action<IGameEvent>>> eventListeners = new Dictionary<Type, List<Action<IGameEvent>>>();
    public static EventManager Instance { get; private set; }

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
    }

    public void Subscribe<T>(Action<IGameEvent> listener) where T : IGameEvent
    {
        var type = typeof(T);
        if (!eventListeners.ContainsKey(type))
        {
            eventListeners[type] = new List<Action<IGameEvent>>();
        }
        eventListeners[type].Add(listener);
    }

    public void Unsubscribe<T>(Action<IGameEvent> listener) where T : IGameEvent
    {
        var type = typeof(T);
        if (eventListeners.ContainsKey(type))
        {
            eventListeners[type].Remove(listener);
        }
    }

    public void TriggerEvent(IGameEvent gameEvent)
    {
        var type = gameEvent.GetType();
        if (eventListeners.ContainsKey(type))
        {
            foreach (var listener in eventListeners[type])
            {
                listener.Invoke(gameEvent);
            }
        }
    }
}
