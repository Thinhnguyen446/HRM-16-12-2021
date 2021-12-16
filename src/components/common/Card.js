import React from "react";

function Card() {
  return (
    <div class="col-12 col-lg-6 col-xl">
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col">
              <h6 className="text-uppercase text-muted mb-2">Value</h6>
              <span className="h2 mb-0">$24,500</span>
            </div>
            <div className="col-auto">
              <span className="h2 fe fe-dollar-sign text-muted mb-0">Xem</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
