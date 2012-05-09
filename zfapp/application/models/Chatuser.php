<?php
/**
 * "Chatuser" table model
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
 * "Chatuser" table model
 * 
 * @category Model
 * @package  AgileExtJsZf
 * @author   Chris Cornutt <ccornutt@phpdeveloper.org>
 * @license  MIT http://google.com?q=mit+license
 * @version  1.0
 * @link     https://github.com/enygma/Agile-ExtJS-ZF
 */
class Application_Model_Chatuser extends Zend_Db_Table_Abstract
{
    /**
     * Table name
     * @var string
     */
    protected $_name = 'chat_user';

    protected $_dependentTables = array('Application_Model_Chatmessage');

    protected $_referenceMap = array(
        'User' => array(
            'columns'       => 'ID',
            'refTableClass' => 'Application_Model_Chatmessage',
            'refColumns'    => 'chatuser_id'
        )
    );

    /**
     * Initialize the model object
     * 
     * @return void
     */
    public function init()
    {
        //nothing to see, move along    
    }

    public function getCurrent()
    {
        $results = $this->fetchAll(
            $this->select()->order('username DESC')
        );
        $users = array(
            array('username'=>'Show All','id'=>0)
        );
        foreach ($results as $user) {
            $users[] = array(
                'username' => $user->username,
                'id' => $user->ID
            );
        }

        return $users;
    }

    public function findByUsername($username)
    {
        $result = $this->fetchAll(
            $this->select()->where('username = ?',$username)
        );
        //error_log(print_r($result,true));
        //return $result[0];
        return $result;
    }

    public function addUser($username)
    {
        $data = array(
            'username' => $username
        );
        return $this->insert($data);
    }
}

