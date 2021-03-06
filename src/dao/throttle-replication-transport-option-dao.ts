import {AbstractDao} from './abstract-dao';
import {Model} from '../model';
import {ThrottleReplicationTransportOption} from '../model/ThrottleReplicationTransportOption';

export class ThrottleReplicationTransportOptionDao extends AbstractDao<ThrottleReplicationTransportOption> {
    public constructor() {
        super(Model.ThrottleReplicationTransportOption);
    }

    public getNewInstance() {
        return super.getNewInstance().then(newInstance => {
            newInstance['%type'] = 'throttle-replication-transport-option';
            return newInstance;
        });
    }
}
