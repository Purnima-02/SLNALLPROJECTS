document.addEventListener("DOMContentLoaded", () => {
  console.log("Dom Loadeddddds111s33388...");
  document
    .getElementById("id_co_applicant_type")
    .addEventListener("change", function () {
      var salariedFields = document.getElementById("salaried-fields");
      var selfEmployedFields = document.getElementById("self-employed-fields");
      if (this.value == "SALARIEDEMPLOYEE") {
        console.log(this.value);
        salariedFields.style.display = "block";
        selfEmployedFields.style.display = "none";
        // Add required attribute to salariedFields
        document.getElementById("id_co_applicant_parent_name").required = true;
        document.getElementById("id_co_applicant_company_name").required = true;
        document.getElementById(
          "id_co_applicant_salaried_designation"
        ).required = true;
        document.getElementById(
          "id_co_applicant_salaried_net_pay"
        ).required = true;
        document.getElementById(
          "id_co_applicant_salaried_emis"
        ).required = true;
        document.getElementById(
          "id_co_applicant_salaried_cibil_score"
        ).required = true;
        // Remove required attribute
        document.getElementById(
          "id_co_applicant_self_employed_business_name"
        ).required = false;
        document.getElementById(
          "id_co_applicant_self_employed_itr_mandatory"
        ).required = false;
        document.getElementById(
          "id_co_pplicant_self_employed_itr_amount"
        ).required = false;
        document.getElementById(
          "id_co_applicant_self_employed_business_licence"
        ).required = false;

        console.log(
          document
            .getElementById("id_co_applicant_self_employed_business_licence")
            .hasAttribute("required")
        );
      } else if (this.value == "SELFEMPLOYEED") {
        console.log(this.value);
        salariedFields.style.display = "none";
        selfEmployedFields.style.display = "block";
        // Add required attribute
        document.getElementById(
          "id_co_applicant_self_employed_business_name"
        ).required = true;
        document.getElementById(
          "id_co_applicant_self_employed_itr_mandatory"
        ).required = true;
        document.getElementById(
          "id_co_pplicant_self_employed_itr_amount"
        ).required = true;
        document.getElementById(
          "id_co_applicant_self_employed_business_licence"
        ).required = true;
        // Remove required attribute
        document.getElementById("id_co_applicant_parent_name").required = false;
        document.getElementById(
          "id_co_applicant_company_name"
        ).required = false;
        document.getElementById(
          "id_co_applicant_salaried_designation"
        ).required = false;
        document.getElementById(
          "id_co_applicant_salaried_net_pay"
        ).required = false;
        document.getElementById(
          "id_co_applicant_salaried_emis"
        ).required = false;
        document.getElementById(
          "id_co_applicant_salaried_cibil_score"
        ).required = false;
      }
      // else {
      //     salariedFields.style.display = 'none';
      //     selfEmployedFields.style.display = 'none';
      //     // Remove all required attributes
      //     document.getElementById('id_co_applicant_parent_name').required = false;
      //     document.getElementById('id_co_applicant_company_name').required = false;
      //     document.getElementById('id_co_applicant_salaried_designation').required = false;
      //     document.getElementById('id_co_applicant_salaried_net_pay').required = false;
      //     document.getElementById('id_co_applicant_salaried_emis').required = false;
      //     document.getElementById('id_co_applicant_salaried_cibil_score').required = false;
      //     document.getElementById('id_co_applicant_self_employed_business_name').required = false;
      //     document.getElementById('id_co_applicant_self_employed_itr_mandatory').required = false;
      //     document.getElementById('id_co_pplicant_self_employed_itr_amount').required = false;
      //     document.getElementById('id_co_applicant_self_employed_business_licence').required = false;
      // }
    });

  document
    .querySelectorAll(
      "#id_mobile_number,#id_ref1mobilenumber,#id_ref2mobilenumber"
    )
    .forEach((ele) => {
      ele.addEventListener("input", (e) => {
        const maxLength = 10;
        const input = e.target;
        console.log(e.target.id);
        if (input.value.length > maxLength) {
          input.value = input.value.slice(0, maxLength);
        }
        if (input.value < 0) {
          input.value = "";
        }
      });
    });

  // Only characters in input
  //  document.querySelectorAll('#id_student_name').addEventListener('input', function (e) {
  //     var value = e.target.value;
  //     e.target.value = value.replace(/[^A-Za-z]/g, '');
  //   });

  // Only characters in input
  document
    .querySelectorAll(
      "#id_student_name,#id_country,#id_course,#id_university_name,#id_co_applicant_parent_name,#id_ref1name,#id_ref2name"
    )
    .forEach((item) => {
      item.addEventListener("input", function (e) {
        var value = e.target.value;
        e.target.value = value.replace(/[^A-Za-z]/g, "");
      });
    });
  // Only characters in input

  // Scores Length
  document
    .querySelectorAll(
      "#id_TOEFL_score,#id_GRE_score,#id_IELTS_score,#id_Duolingo_score,#id_PTE_score"
    )
    .forEach((id) => {
      id.addEventListener("input", (e) => {
        console.log(e.target.id);
        const maxLEngth = 5;
        const input = e.target;
        if (input.value.length > maxLEngth) {
          input.value = input.value.slice(0, maxLEngth);
        }

        if (input.value < 0) {
          input.value = "";
        }
      });
    });
  // Scores Length

  // cibilScore Length

  document.querySelector("#id_cibil_score").addEventListener("input", (e) => {
    const maxLEngth = 3;
    const input = e.target;
    if (input.value.length > maxLEngth) {
      input.value = input.value.slice(0, maxLEngth);
    }
    if (input.value < 0) {
      input.value = "";
    }
  });
  // cibilScore Length

  //  salaried CibilScore
  document
    .querySelector("#id_co_applicant_salaried_cibil_score")
    .addEventListener("input", (e) => {
      const maxLEngth = 3;
      const input = e.target;
      if (input.value.length > maxLEngth) {
        input.value = input.value.slice(0, maxLEngth);
      }
      if (input.value < 0) {
        input.value = "";
      }
    });
  //  salaried CibilScore

  document.querySelector("#id_backlogs").addEventListener("input", (e) => {
    const maxLEngth = 2;
    const input = e.target;
    if (input.value.length > maxLEngth) {
      input.value = input.value.slice(0, maxLEngth);
    }
    if (input.value < 0) {
      input.value = "";
    }
  });

  console.log(
    document.querySelector("#id_required_loan_amount").hasAttribute("required")
  );

  document
    .querySelectorAll(
      "#id_required_loan_amount,#id_co_applicant_salaried_net_pay,#id_co_applicant_salaried_emis,#id_co_pplicant_self_employed_itr_amount,#id_property_market_value,#id_property_govt_value"
    )
    .forEach((id) => {
      id.addEventListener("input", (e) => {
        console.log("loans");

        console.log(e.target.id);

        const maxLEngth = 10;
        const input = e.target;
        if (input.value.length > maxLEngth) {
          input.value = input.value.slice(0, maxLEngth);
        }
        if (input.value < 0) {
          input.value = "";
        }
      });
    });
});
