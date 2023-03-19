import React from "react";
import "./RupantorInventory.css";
const RupantorInventory = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="payroll-flex">
        <div>
          <h1 className="hr-text">Rupantor Inventory</h1>
          <span className="cover-ball"></span>
          <span className="round-ball"></span>
        </div>
        <div>
          <img
            className="pay-img"
            src="https://suffixit.com/static/media/Logistics-pana.e161b0ed.svg"
            alt=""
          />
        </div>
      </div>

      <div className="payroll-mod-flex">
        <div data-aos="fade-right">
          <img
            className="payroll-img"
            src="https://suffixit.com/static/media/Server-amico.e143ea58.svg"
            alt=""
          />
        </div>
        <div data-aos="fade-left">
          <h1 className="payroll-text">Inventory Management</h1>
          <p className="payroll-p">
            The Rupantor Inventory Control module is core to the manufacturing
            and distribution systems and processes built into Rupantor ERP.
            Inventory is used to control the value and quantities of finished
            products, sub-assemblies, components, raw material, consumables and
            non-merchandise items. The inventory master ﬁle allows you to
            maintain and control over two hundred fields and attributes giving
            enormous flexibility when dealing with different types of business.
          </p>
        </div>
      </div>

      <div className="payroll-mod-flex more-flex">
      
        <div data-aos="fade-right">
          <h1 className="payroll-text">The ‘Inventory Control’ module integrates to</h1>
          <ul class="list-disc list-text more-text-size">
            <li>
            Sales Orders for quotes, orders and invoicing
            </li>
            <li>
            Purchase Orders for replenishment planning and purchasing
            </li>
            <li>Bill of material for all material links</li>
            <li>Work-in Progress for all material requirements</li>
            <li>Estimating for all material requirements</li>
            <li>Remanufacturing for all material requirements</li>
         
          </ul>
        </div>
        <div data-aos="fade-left">
          <img
            className="payroll-img"
            src="https://suffixit.com/static/media/Processing-pana.2acb57df.svg"
            alt=""
          />
        </div>
      </div>

      <div className="payroll-mod-flex more-flex">

      <div data-aos="fade-right">
        <img
          className="payroll-img"
          src="https://suffixit.com/static/media/inventory-features.7aca8a3a.svg"
          alt=""
        />
      </div>
      
      <div data-aos="fade-left">
        <h1 className="payroll-text">Features of Inventory Control</h1>
        <ul class="list-disc list-text more-text-size">
          <li>Multiple warehouses</li>
          <li>Product classes</li>
          <li>Products categories</li>
          <li>Products groups / families</li>
          <li>Tariff codes</li>
          <li>Consolidated picking</li>
          <li>Product certifications</li>
          <li>Buyer and Planner controls</li>
          <li>Consignment inventory control</li>
          <li>Flexible inventory count system</li>
          <li>Detailed history and tracking</li>
          <li>User defined fields</li>
          <li>Multiple units of measure</li>
       
        </ul>
      </div>
    
    </div>


      <div className="payroll-mod-flex more-flex">
      
      <div data-aos="fade-right">
        <h1 className="payroll-text">Benefits of Inventory Control</h1>
        <ul class="list-disc list-text more-text-size">
          <li>
          Powerful built in features to control and analyze inventory
          </li>
          <li>
          Balance and optimize inventory investments using proven built in tools
          </li>
          <li>Reduce working capital while increasing customer service</li>
          <li>Detailed audit trails for all master data, quantity, and financial changes</li>
          <li>Detailed cost control resulting in accurate margin reporting</li>
          <li>Flexible rates and premium codes</li>
          <li>Tight integration with all other relevant modules</li>
       
        </ul>
      </div>


      <div data-aos="fade-left">
        <img
          className="payroll-img"
          src="https://suffixit.com/static/media/businessBenefits.f309c9a3.svg"
          alt=""
        />
      </div>
    </div>

      <div>
        <img
          className="live-demo-img"
          src="https://suffixit.com/static/media/Telecommuting-rafiki.6436ded2.svg"
          alt=""
        />
        <h1 className="schedule-text">Schedule a live demo</h1>
        <p className="schedule-p">
          Go for a free practical demonstration in order to experience the user
          friendly platform of Suffix Field Force Management.
        </p>
        <button className="schedule-btn">Request for a demo</button>
      </div>
    </div>
  );
};

export default RupantorInventory;
