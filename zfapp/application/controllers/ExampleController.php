<?php
/**
 * ExampleController - handles frontend ExtJS requests
 * 
 * PHP Version 5.3+
 * 
 * @category Controller
 * @package  AgileExtJsZf
 * @author   Chris Cornutt <ccornutt@phpdeveloper.org>
 * @license  MIT http://google.com?q=mit+license
 * @version  1.0
 * @link     https://github.com/enygma/Agile-ExtJS-ZF
 */

/**
 * ExampleController - handles frontend ExtJS requests
 * 
 * @category Controller
 * @package  AgileExtJsZf
 * @author   Chris Cornutt <ccornutt@phpdeveloper.org>
 * @license  MIT http://google.com?q=mit+license
 * @version  1.0
 * @link     https://github.com/enygma/Agile-ExtJS-ZF
 */

class ExampleController extends Zend_Controller_Action
{
    /**
     * Initialize the controller object
     * 
     * @return void
     */
    public function init()
    {
        $this->_helper->contextSwitch()
            ->addActionContext('example2', array('xml', 'json'))
            ->addActionContext('example3', array('xml', 'json'))
            ->addActionContext('example4', array('xml', 'json'))
            ->addActionContext('example5', array('xml', 'json'))
            ->addActionContext('example5update', array('xml', 'json'))
            ->addActionContext('example6submit', array('xml', 'json'))
            ->addActionContext('example8submit', array('xml', 'json'))
            ->addActionContext('example8read', array('xml', 'json'))
            ->addActionContext('example8users', array('xml', 'json'))
            ->setAutoJsonSerialization(true)
            ->initContext();
    }

    /**
     * Outputs the list of the examples (defined in the view)
     * 
     * @return void
     */
    public function indexAction()
    {
        //nothing to see, just used for outputting the examples list
    }

    /**
     * Outputs Example #1 (simple window)
     * 
     * @return void
     */
    public function example1Action()
    {
        //nothing to see, just used for outputting the example
    }
    
    /**
     * This is used in the example related to models and stores
     * 
     * @return void
     */
    public function example2Action()
    {
        // NOTE: hard-coded sleep to show the loader
        sleep(1);

        $this->view->products = array(
            array(
                'item_name'     => 'Tekno Black Light Bubbles',
                'item_type'     => 'Toy',
                'amount'        => '$3.99 USD'
            ),
            array(
                'item_name'     => 'Sheldon\'s Spot',
                'item_type'     => 'T-Shirt',
                'amount'        => '$17.99 USD'
            )
        );
    }

    /**
     * Output to show tree view example
     * 
     * @return void
     */
    public function example3Action()
    {
        $this->view->tree_items = array(
            array('text' => 'Item #1'),
            array('text' => 'Item #2'),
        );
    }

    /**
     * Working with Layouts
     * 
     * @return void
     */
    public function example4Action()
    {
        $this->view->mytree = array(
            array('id'=>'test1','text'=>'text field 1'),
            array('id'=>'test2','text'=>'text field 2')
        );
    }

    /**
     * Pulling data from the database for user informat
     * 
     * @return void
     */
    public function example5Action()
    {
        $users = new Application_Model_User();
        $user = $users->fetchAll();

        $this->view->users = array();

        foreach ($user as $u) {
            $this->view->users[] = array(
                'name' => $u->name,
                'id'   => $u->ID
            );
        }
        $this->view->success = true;
    }
    
    /**
     * Update action for the example5
     * 
     * @return void
     */
    public function example5updateAction()
    {
        // the frontend sends the request back in the POST body
        // so we have to fetch it
        $request = json_decode($this->getRequest()->getRawBody());
        //error_log('request: '.print_r($request,true));

        $method = $this->getRequest()->getParam('method');
        //error_log('method: '.var_export($method,true));

        try {

            $users  = new Application_Model_User();
            $db     = $users::getDefaultAdapter();

            switch($method) {
                case 'update':
                    $stmt = $db->prepare('UPDATE users SET name = :name where id = :id');
                    $stmt->bindParam('id', $request->id);
                    $stmt->bindParam('name', $request->name);
                    $stmt->execute();
                    break;
                case 'create':
                    $stmt = $db->prepare('INSERT INTO users VALUES (:name,NULL)');
                    $stmt->bindParam('name', $request->name);
                    $stmt->execute();
                    break;
                case 'delete':
                    $stmt = $db->prepare('DELETE FROM users WHERE id = :id');
                    $stmt->bindParam('id', $request->id);
                    $stmt->execute();
                    break;
                default:
                    // pull the records
            }

            $this->view->success = 'true';

        } catch (Exception $e) {
            error_log('ERROR saving user: '.$e->getMessage());
            $this->view->success = 'false';
        }
    }

    /**
     * Example6
     * 
     * @return void
     */
    public function example6Action()
    {
        
    }
    public function example6submitAction()
    {
        $request  = $this->getRequest();
        $form     = new Application_Form_Login();

        $success  = false;
        $message  = null;

        $username = $request->getParam('username');
        $password = $request->getParam('password');

        //error_log('uname: '.$username.' -> '.$password);

        if ($request->isPost()) {
            if ($form->isValid($request->getPost())) {

                $result = $this->_checkDbLogin($form->getValues());

                $success = $result['success'];
                $message = $result['message'];
            }
        }

        $this->view->success = $success;
        $this->view->message = $message;
    }
    
    public function example7Action()
    {
        // unit testing with Jasmine
    }

    public function example8Action()
    {
        // chat application
    }

    public function example8readAction()
    {
        $request      = json_decode($this->getRequest()->getRawBody());
        $filterUserId = $this->getRequest()->getParam('filterBy');
        $username     = $this->getRequest()->getParam('username');
        $msg          = new Application_Model_Chatmessage();

        if (!empty($username)) {
            // we're changing our username... 
            $user  = new Application_Model_Chatuser();
            $found = $user->findByUsername($username);

            if (count($found)==0) {
                // new user - add to the table!
                $insertId = $user->addUser($username);
                $this->view->insertUserId = $insertId;
            } else {
                $this->view->insertUserId = $found[0]->ID;
            }
        }

        if (isset($request->message)) {
            // add the message!
            $userId = (!empty($request->chatUser)) ? $request->chatUser : null;
            $msg->add($request->message,$userId);
        }

        // see if we need to filter the list
        $filterUserId = ($filterUserId !== null && (int)$filterUserId !== 0) 
            ? $filterUserId : null;

        // get the latest messages from the list
        $this->view->messages = $msg->getLatest(20,$filterUserId);
        $this->view->success = true;
    }

    public function example8usersAction()
    {
        $user = new Application_Model_Chatuser();
        $this->view->users = $user->getCurrent();
    }

    public function example9Action()
    {
        //nothing to see, move along
    }

    private function _checkDbLogin($values)
    {
        $dbAdapter   = Zend_Db_Table::getDefaultAdapter();
        $authAdapter = new Zend_Auth_Adapter_DbTable($dbAdapter);

        $authAdapter->setTableName('users')
            ->setIdentityColumn('name')
            ->setCredentialColumn('password')
            ->setCredentialTreatment('MD5(?)');

        $authAdapter->setIdentity($values['username']);
        $authAdapter->setCredential($values['password']);

        $auth       = Zend_Auth::getInstance();
        $authResult = $auth->authenticate($authAdapter);

        if ($authResult->isValid()) {
            return array(
                'success' => true,
                'message' => $authResult->getMessages()
            );
        } else {
            return array(
                'success' => false,
                'message' => $authResult->getMessages()
            );
        }
    }
}

?>