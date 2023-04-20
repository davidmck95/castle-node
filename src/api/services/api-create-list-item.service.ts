import { Configuration } from '../../configuration';
import { CommandCreateListItemService } from '../../command/command.module';
import { APIService } from './api.service';
import AbortController from 'abort-controller';
import { ListItemPayload } from '../../payload/models/list_item_payload';

export const APICreateListItemService = {
  call: async (
    options: ListItemPayload,
    configuration: Configuration
  ): Promise<any> => {
    const controller = new AbortController();
    const command = CommandCreateListItemService.call(
      controller,
      options,
      configuration
    );

    return APIService.call(controller, command, configuration);
  },
};
