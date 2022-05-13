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

	

	public function create($name, $email)
	{
        try {
			$sentenciaSql = "INSERT INTO person(per_name, per_email, per_date_create, per_date_update, 'status') VALUES (?, ?, ?, ?, ?, ?)";
			$resultado = $this->miConexion->prepare($sentenciaSql);
            $datosIns = array($name,$email,"2021-12-09", "2021-12-09", 1);
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
			$sentenciaSql ="SELECT * FROM person WHERE status = 1";
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
	public function update($id,$name,$email)
	{
		try {
			$sentenciaSql = "UPDATE person SET id_per=?, per_name=?, per_email=?, per_date_update=?, status=? WHERE id_per=$id";
			$resultado = $this->miConexion->prepare($sentenciaSql);
			$datoUp = array($id,$name,$email,"2021-04-07", 1);
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
			$sentenciaSql = "UPDATE person SET status=? WHERE id_per=$id";
			$resultado = $this->miConexion->prepare($sentenciaSql);
			$datoDel = array(0);
			$resultado->execute($datoDel);
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
?>