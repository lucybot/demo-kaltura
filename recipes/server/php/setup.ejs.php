require_once('lib/KalturaClient.php');
$config = new KalturaConfiguration(<%- Lucy.answer('setup', 'partner_id') %>);
$config->serviceUrl = 'https://www.kaltura.com/';
$KalturaClient = new KalturaClient($config);
$KalturaSession = $KalturaClient->session->start(
    <%- Lucy.answer('setup', 'admin_secret') %>,
    "myUser",
    KalturaSessionType::ADMIN,
    <%- Lucy.answer('setup', 'partner_id') %>,
    null, null);
$KalturaClient->setKS($KalturaSession);
