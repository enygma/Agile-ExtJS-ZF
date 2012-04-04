<?php

class ExampleController extends Zend_Controller_Action
{

	public function init()
	{
	    $this->_helper->contextSwitch()
          ->addActionContext('example2', array('xml', 'json'))
          ->addActionContext('example3', array('xml', 'json'))
          ->addActionContext('example4', array('xml', 'json'))
          ->addActionContext('example5', array('xml', 'json'))
          ->setAutoJsonSerialization(true)
          ->initContext();
	}

	public function indexAction()
	{

	}
	public function example1Action()
	{

	}
	
	/**
	 * This is used in the example related to models and stores
	 */
	public function example2Action()
	{
		// NOTE: hard-coded sleep to show the loader
		sleep(1);

		$this->view->products = array(
			array(
				'item_name'		=> 'Tekno Black Light Bubbles',
				'item_type'		=> 'Toy',
				'amount'		=> '$3.99 USD'
			),
			array(
				'item_name'		=> 'Sheldon\'s Spot',
				'item_type'		=> 'T-Shirt',
				'amount'		=> '$17.99 USD'
			)
		);
	}
	public function example3Action()
	{
		$this->view->tree_items = array(
			array('text' => 'Item #1'),
			array('text' => 'Item #2'),
		);
	}
	public function example4Action()
	{
		$this->view->mytree = array(
			array('id'=>'test1','text'=>'text field 1'),
			array('id'=>'test2','text'=>'text field 2')
		);
	}
	public function example5Action()
	{
		$this->view->users = array(
			array('name'=>'User #1'),
			array('name'=>'User #2')
		);
		$this->view->success = true;
	}
	public function example6Action()
	{
		
	}
	
}

?>