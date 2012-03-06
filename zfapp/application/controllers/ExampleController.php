<?php

class ExampleController extends Zend_Controller_Action
{

	public function init()
	{
	    $this->_helper->contextSwitch()
          ->addActionContext('example2', array('xml', 'json'))
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
		
	}
	public function example4Action()
	{
		
	}
	public function example5Action()
	{
		
	}
	public function example6Action()
	{
		
	}
	
}

?>