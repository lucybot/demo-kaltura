<?php
require_once('Kaltura/lib/KalturaClient.php');
$config = new KalturaConfiguration(<%- setup.partner_id.code %>);
$config->serviceUrl = 'https://www.kaltura.com/';
$KalturaClient = new KalturaClient($config);
