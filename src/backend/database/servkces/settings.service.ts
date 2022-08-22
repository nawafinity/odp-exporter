import ORM from ".."
import Settings from "../entities/Settings"

const getSettings = async () => {
    const settingsRepository = ORM.getRepository(Settings)
    return settingsRepository.find();
}