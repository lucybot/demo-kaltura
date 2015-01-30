require_once('lib/KalturaClient.php');
$config = new KalturaConfiguration(<%- Lucy.answer('setup', 'partner_id') %>);
$config->serviceUrl = 'https://www.kaltura.com/';
$KalturaClient = new KalturaClient($config);
