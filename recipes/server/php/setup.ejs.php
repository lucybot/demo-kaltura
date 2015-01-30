require_once('lib/Kaltura/Client/Client.php');
$config = new KalturaConfiguration(<%- Lucy.answer('setup', 'partner_id') %>);
$config->serviceUrl = 'https://www.kaltura.com/';
$KalturaClient = new KalturaClient($config);
