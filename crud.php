<?php 
require "conexion.php";
/**
 *
 * 
 */
class Crud 
{
	private $miConexion;
	private $retorno;

	

	function __construct()
	{
		$this->miConexion = new Conexion();
        $this->miConexion = $this->miConexion->conectarme();
		$this->retorno = new stdClass();
	}

	

	public function create($name,$telefono, $email="")
	{
        try {
			$sentenciaSql = "INSERT INTO person(per_name, per_telefono, per_email, per_date_create, per_date_update) 
								VALUES (?, ?, ?, CURDATE(), CURDATE())";
			$resultado = $this->miConexion->prepare($sentenciaSql);
            //$datosIns = array("Sneider", '358', "sneider@outlook.com");
            $datosIns = array($name, $telefono, $email);
            $resultado->execute($datosIns);
			$this->retorno->estado = true;
        	$this->retorno->datos = $resultado;
        	$this->retorno->mensaje = "OK";
		} catch (PDOException $e) {
			$this->retorno->estado = false;
	        $this->retorno->datos = $resultado;
			$this->retorno->mensaje = "Error: " .$e->getMessage();
		}
		return $this->retorno;
	}
	public function read()
	{
		try {
			$sentenciaSql ="SELECT * FROM person";
			$resultado = $this->miConexion->query($sentenciaSql);
			$retorno = $resultado->fetchAll(PDO::FETCH_ASSOC);
			$this->retorno->estado =true;
	        $this->retorno->datos = $retorno;
			$this->retorno->mensaje ="ok";
		} catch (PDOException $e) {
			$this->retorno->estado = false;
	        $this->retorno->datos = null;
			$this->retorno->mensaje = "Error: " .$e->getMessage();
		}
		return $this->retorno;
	}
	public function update($id,$name, $phone,$email)
	{
		try {
			$sentenciaSql = "UPDATE person SET  per_name=?, per_telefono=?, per_email=?, per_date_update=CURDATE() WHERE id=$id";
			$resultado = $this->miConexion->prepare($sentenciaSql);
			$datoUp = array($name, $phone,$email);
			$resultado->execute($datoUp);
			$this->retorno->estado = true;
	        $this->retorno->datos = $resultado;
		} catch (PDOException $e) {
			$this->retorno->estado = false;
	        $this->retorno->datos = null;
			$this->retorno->mensaje = "Error: " .$e->getMessage();
		}
		return $this->retorno;
	}
	public function delete($id)
	{
		try {
			$sentenciaSql = "DELETE FROM person  WHERE id=$id";
			$resultado = $this->miConexion->prepare($sentenciaSql);
			$resultado->execute();
			$this->retorno->estado = true;
	        $this->retorno->datos = $resultado;
		} catch (PDOException $e) {
			$this->retorno->estado = false;
	        $this->retorno->datos = null;
			$this->retorno->mensaje = "Error: " .$e->getMessage();
		}
	}
	
}
//READ
/* foreach($ejemplo as $fila) {
	print_r($fila);
}*/
// CREATE
/*
$crud = new Crud();
$res = $crud->create('Yenner', '666', 'insertando@tela.rico');
var_dump($res);
*/
?>