<?php
/**
 * "Chatmessage" table model
 * 
 * PHP Version 5.3+
 * 
 * @category Model
 * @package  AgileExtJsZf
 * @author   Chris Cornutt <ccornutt@phpdeveloper.org>
 * @license  MIT http://google.com?q=mit+license
 * @version  1.0
 * @link     https://github.com/enygma/Agile-ExtJS-ZF
 */

/**
 * "Chatmessage" table model
 * 
 * @category Model
 * @package  AgileExtJsZf
 * @author   Chris Cornutt <ccornutt@phpdeveloper.org>
 * @license  MIT http://google.com?q=mit+license
 * @version  1.0
 * @link     https://github.com/enygma/Agile-ExtJS-ZF
 */
class Application_Model_Chatmessage extends Zend_Db_Table_Abstract
{
    /**
     * Table name
     * @var string
     */
    protected $_name = 'chat_messages';

    protected $_dependentTables = array('Application_Model_Chatuser');

    protected $_referenceMap = array(
        'Message' => array(
            'columns'       => 'chatuser_id',
            'refTableClass' => 'Application_Model_Chatuser',
            'refColumns'    => 'ID'
        )
    );

    //private $user = null;

    /**
     * Initialize the model object
     * 
     * @return void
     */
    public function init()
    {
        //nothing to see, move along    
    }

    /**
     * Get the latest # of messages from the queue
     * 
     * @param int $limit Limit the number of values returned
     */
    public function getLatest($limit=10,$filterUserId=null)
    {
        $select = $this->select()->order('date_posted DESC')->limit($limit);
        if ($filterUserId !== null) {
            $select = $select->where('chatuser_id = '.$filterUserId);
        }
        $results = $this->fetchAll($select);

        $messages = array();
        foreach($results as $message) {
            //error_log(print_r($message,true));

            $related = $message->findDependentRowset('Application_Model_Chatuser');
            $messages[] = array(
                'message' => $message->message,
                'username'=> $related->current()->username,
                'userId'  => $message->chatuser_id,
                'id'      => $message->ID,
                'ts'      => (int)$message->date_posted,
                'posted'  => date('m.d.y H:i',$message->date_posted)
            );
        }

        return $messages;
    }
    public function add($message,$userId=1)
    {
        $data = array(
            'message' => $message,
            'chatuser_id' => $userId,
            'date_posted' => time()
        );
        $this->insert($data);
    }
}

