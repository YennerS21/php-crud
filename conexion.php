<?php
class Conexion extends PDO{
    //
    private  $instancia;
    private $driverPdo = "mysql";
    private $host="localhost";
    private $userName="root";
    private $password="3213049684";
    private $dataBase = "BDagenda";
    
    /**
     * Método constructor de la Conexión
     */
    public function __construct(){
        $conStr= $this->driverPdo.':host='.$this->host.';dbname='.$this->dataBase;
        try {
            $this->instancia = new PDO($conStr,$this->userName, $this->password);
            $this->instancia->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
            
        } catch (PDOException $e) {
            print "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }
    public function conectarme()
    {   
        if(!isset($this->instancia))
        {
            return "fail";
        }
        return $this->instancia;
        
    }
}
?>
