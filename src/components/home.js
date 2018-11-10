import React from 'react';
import { Link } from 'react-router';


export default ()=> {
        return (
            <div className="col-lg-12">
                <div className = "black" >
                    <p className = "header" > OMNI FULFILLMENT </p>  
                </div>
                <Link to = "/shipment" >
                    <div className="col-md-6 col-sm-6 col-xs-6 background-blue right-border flex">
                        <div className="align-center">
                        
                            <div className = "btn margin-10"> <i className="fa fa-truck"></i> </div>
                            <p> Start Picking </p>
                        </div>
                    </div>
                </Link>
                <Link to = "/shipment" >
                    <div className = "col-md-6 col-sm-6 col-xs-6 background-blue flex"> 
                        <div className="align-center">
                            <div className = "btn margin-10"> <i className="fa fa-cube"></i> </div>
                            <p>Custom Picking</p>
                        </div>
                    </div>
                </Link>
                <Link to = "/shipment" >
                    <div className = "col-md-6 col-sm-6 col-xs-6 background-green flex" > 
                        <div className="align-center">
                            <div className = "btn margin-10 green-icon"> <i className="fa fa-circle-o"></i> </div>
                            <p>Shipments Ready </p>
                        </div>
                    </div>
                </Link>
                <Link to = "/shipment" >
                    <div className = "col-md-6 col-sm-6 col-xs-6 background-purple flex" > 
                        <div className="align-center">
                            <div className = "btn margin-10 purple-icon"> <i className="fa fa-cubes"></i> </div>
                            <p className="font-weight-bold">BOSS</p>
                        </div>
                    </div>
                </Link>
                <Link to = "/shipment" >
                    <div className = "col-md-12 col-sm-12 col-xs-12 background-orange flex" > 
                        <div className="align-center">
                            <p className="font-weight-bold margin-10">ASSIGN HOLD LOCATION</p>
                            <div className = "btn margin-10 orange-icon"> <i className="fa fa-circle-o"></i> </div>
                            <p>Container Ready</p>
                        </div>
                    </div>
                </Link>
                <Link to = "/shipment" >
                    <div className = "col-md-12 col-sm-12 col-xs-12 background-gray">
                        <p className="font-weight-bold margin-10">Workload Summary</p>
                        <i className="fa fa-chevron-right"></i>
                    </div>
                </Link>
                <Link to = "/shipment" >
                    <div className = "col-md-12 col-sm-12 col-xs-12 background-gray">
                        <p className="font-weight-bold margin-10">Trouble</p>
                        <div className="flex-wrap">
                            <i className="fa fa-exclamation-triangle"></i>
                            <p>0</p>
                            <i className="fa fa-chevron-right"></i>
                        </div>
                    </div>
                </Link>
                <Link to = "/shipment" >
                    <div className = "col-md-12 col-sm-12 col-xs-12 background-gray">
                        <p className="font-weight-bold margin-10">Location Management</p>
                        <i className="fa fa-exclamation-circle"></i>
                    </div>
                </Link>
                
            </div>        

        )
}