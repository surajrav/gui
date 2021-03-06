import { SystemGeneralDao } from '../dao/system-general-dao';

export class SystemGeneralRepository {
    private static instance: SystemGeneralRepository;
    private dao: SystemGeneralDao;

    private constructor() {
        this.dao = new SystemGeneralDao();
    }

    public static getInstance() {
        if (!SystemGeneralRepository.instance) {
            SystemGeneralRepository.instance = new SystemGeneralRepository();
        }
        return SystemGeneralRepository.instance;
    }

    public getSystemGeneral(): Object {
        return this.dao.get();
    }
}
