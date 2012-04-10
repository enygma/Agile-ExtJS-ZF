<?php
/**
 * "User" table model
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
 * "User" table model
 * 
 * @category Model
 * @package  AgileExtJsZf
 * @author   Chris Cornutt <ccornutt@phpdeveloper.org>
 * @license  MIT http://google.com?q=mit+license
 * @version  1.0
 * @link     https://github.com/enygma/Agile-ExtJS-ZF
 */
class Application_Model_User extends Zend_Db_Table_Abstract
{
    /**
     * Table name
     * @var string
     */
    protected $_name = 'users';

    /**
     * Initialize the model object
     * 
     * @return void
     */
    public function init()
    {
        //nothing to see, move along    
    }
}

