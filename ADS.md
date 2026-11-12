# Ads — grandthefttimeline.wiki

The Native Banner slot after Quick Answer is wired and **turned off**.

`sites/grandthefttimeline/ads.config.ts` sets `enabled` to false. `afterQuickAnswer.id` is an empty string. `afterQuickAnswer.scriptSrc` and the site-wide `scriptSrc` are empty. `invokeBase` is empty. No key from another game is stored here. With those values the slot does not render.

`analytics.gaId` in `sites/grandthefttimeline/site.config.ts` is an empty string. The base layout does not load Google Analytics.

Adult and sensitive categories stay off. The 404 page does not render a slot. A zone for this domain, when one exists, belongs only in this file.
