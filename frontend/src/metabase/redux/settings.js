import { createThunkAction } from "metabase/lib/redux";
import MetabaseSettings from "metabase/lib/settings";

import _ from "underscore";

import { SessionApi } from "metabase/services";

export const refreshSiteSettings = createThunkAction("REFRESH_SITE_SETTINGS", () =>
    async (dispatch, getState) => {
        const settings = _.omit(await SessionApi.properties(), (value, key) => key.indexOf('$') === 0);
        MetabaseSettings.setAll(settings);
        return settings;
    }
);
