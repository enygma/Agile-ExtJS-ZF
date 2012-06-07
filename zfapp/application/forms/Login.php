<?php

class Application_Form_Login extends Zend_Form
{
	public function init()
	{
		$this->addElement('text','username',
			array(
				'filters' 	 => array(
					'StringTrim','StringToLower'
				),
				'validators' => array(),
				'required' 	 => true
			)
		);

		$this->addElement('text','password',
			array(
				'filters'	 => array(
					'StringTrim','StringToLower'
				),
				'validators' => array(),
				'required'	 => true
			)
		);
	}
}

?>