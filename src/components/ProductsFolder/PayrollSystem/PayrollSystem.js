import React from "react";
import "./PayrollSystem.css";

const PayrollSystem = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="payroll-flex">
        <div>
          <h1 className="hr-text">HR & Payroll Modules</h1>
          <span className="cover-ball"></span>
          <span className="round-ball"></span>
        </div>
        <div>
          <img
            className="pay-img"
            src="https://suffixit.com/static/media/Payment%20Information-rafiki.965edb1c.svg"
            alt=""
          />
        </div>
      </div>

      <div className="payroll-mod-flex">
        <div data-aos="fade-right">
          <img
            className="payroll-img"
            src="https://suffixit.com/static/media/illustration-payroll.5b362182.svg"
            alt=""
          />
        </div>
        <div data-aos="fade-left">
          <h1 className="payroll-text">HR & Payroll Modules</h1>
          <p className="payroll-p">
            The ‘HR & Payroll’ module is an extremely flexible and effective
            payroll module fully integrated into the Rupantor ERP system. The
            payroll caters for all the standard earnings, benefits and
            deductions. Payroll includes user-defined earnings, deductions, and
            benefits descriptors which allow you to setup your own earnings,
            deductions and benefits based on your companies’ particular needs.
            Each of the descriptors can be setup to attract, if necessary and
            taxes.
          </p>
        </div>
      </div>

      <div className="payroll-mod-flex">
        <div data-aos="fade-right">
          <h1 className="payroll-text">
            The ‘HR & Payroll’ module integrates to
          </h1>
          <ul class="list-disc list-text">
            <li>Bank Book/reconciliation for all payments made to employees</li>
            <li>Work in Progress module for time cards</li>
            <li>General Ledger for expense distribution</li>
          </ul>
        </div>
        <div data-aos="fade-left">
          <img
            className="payroll-img"
            src="https://suffixit.com/static/media/Sponsor-bro.fe1a6b99.svg"
            alt=""
          />
        </div>
      </div>

      <div className="payroll-mod-flex">
        <div data-aos="fade-right">
          <img
            className="payroll-img"
            src="https://suffixit.com/static/media/Audit-rafiki.58a65c7d.svg"
            alt=""
          />
        </div>
        <div data-aos="fade-left">
          <h1 className="payroll-text">Benefits of HR & Payroll</h1>
          <ul class="list-disc list-text">
            <li>Benefits of HR & Payroll</li>
            <li>User defined pay slips</li>
            <li>Pay by cheque</li>
            <li>EFT Payments</li>
            <li>
              Detailed audit trails for all master data and financial changes
            </li>
            <li>Time savings with simple payroll calculation</li>
            <li>
              Ability to cancel and recalculate easily, until you are happy with
              the pay run
            </li>
            <li>Detailed GL integration</li>
          </ul>
        </div>
      </div>

      <div className="payroll-mod-flex">
        <div data-aos="fade-right">
          <h1 className="payroll-text">Features of HR & Payroll</h1>
          <ul class="list-disc list-text">
            <li>Multiple branch control</li>
            <li>User defined earnings</li>
            <li>User defined benefits</li>
            <li>User defined deductions</li>
            <li>Multiple work departments</li>
            <li>FLexible rates and premium codes</li>
            <li>Multiple pay periods</li>
          </ul>
        </div>

        <div data-aos="fade-left">
          <img
            className="payroll-img"
            src="https://suffixit.com/static/media/Credit%20card-rafiki.05a08610.svg"
            alt=""
          />
        </div>
      </div>

      <div>
        <h1 className="more-info">
          More <span className="info-text">Information</span>
        </h1>

        <div className="payroll-mod-flex info-flexing">
          <div data-aos="fade-right">
            <h1 className="payroll-text">Time & Attendance</h1>
            <p className="payroll-p">
              Employee Tracker Plus improves payroll accuracy by automating the
              collection of employees’ times, correctly applying company pay
              policies, delivering time and attendance data to supervisors to
              allow faster decision-making regarding staff, and by providing
              access to real-time data to allow decision-making based on
              accurate labor cost data.
            </p>
          </div>
          <div data-aos="fade-left">
            <h1 className="payroll-text">How it works?</h1>
            <p className="payroll-p">
              Employee Tracker Plus, designed to help control labor costs and
              improve payroll accuracy, is offered as an add-on module to
              Rupantor ERP’s core application. Customers can expect to save 2-5%
              of overall payroll costs by investing in this module.
            </p>
          </div>
        </div>

        <div className="payroll-mod-flex">
          <div data-aos="fade-right">
            <img
              className="payroll-img"
              src="https://suffixit.com/static/media/Time%20management-rafiki.9ce8fbde.svg"
              alt=""
            />
          </div>
          <div data-aos="fade-left">
            <h1 className="payroll-text">Features</h1>
            <ul class="list-disc list-text">
              <li>Advanced scheduling</li>
              <li>Time approval system that highlights expections</li>
              <li>User-defined rates and calculation rules</li>
              <li>Tracking of absenteeism and tardiness</li>
              <li>Statutory and public holiday generator</li>
            </ul>
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
            Go for a free practical demonstration in order to experience the
            user friendly platform of Suffix Field Force Management.
          </p>
          <button className="schedule-btn">Request for a demo</button>
        </div>
      </div>
    </div>
  );
};

export default PayrollSystem;
