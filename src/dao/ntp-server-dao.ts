import { AbstractDao } from './abstract-dao';
import {Model} from '../model';
import {NtpServer} from '../model/NtpServer';

export class NtpServerDao extends AbstractDao<NtpServer> {

    public constructor() {
        super(Model.NtpServer, {
            queryMethod: 'ntp_server.query',
            updateMethod: 'ntp_server.update',
            createMethod: 'ntp_server.create',
            deleteMethod: 'ntp_server.delete',
            eventName: 'entity-subscriber.ntp_server.changed'
        });
    }

    public syncNow(serverAddress: string) {
        return this.middlewareClient.submitTask('ntp_server.sync_now', [serverAddress]);
    }
}


