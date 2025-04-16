public interface IGameEvent { }

public class UpgradeEvent : IGameEvent
{
    public int upgradeLevel;
    public UpgradeEvent(int level)
    {
        upgradeLevel = level;
    }
}
