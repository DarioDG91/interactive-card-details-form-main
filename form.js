const validateForm = (formSelector) => {
  const formElement = document.querySelector(formSelector);

  const validationOptions = [
    {
      attribute: "pattern",
      isValid: (input) => {
        const patternRegex = new RegExp(input.pattern);
        return patternRegex.test(input.value);
      },
      errorMessage: (input, label) =>
        `Wrong format, ${label.textContent} is not valid`,
    },
    {
      attribute: "minlength",
      isValid: (input) =>
        input.value && input.value.length >= parseInt(input.minLength, 10),
      errorMessage: (input, label) =>
        `${label.textContent} needs to be at least ${input.minLength} characters`,
    },
    {
      attribute: "required",
      isValid: (input) => input.value.trim() !== "",
      errorMessage: (input, label) => `Can't be blank`,
    },
  ];

  const validateSingleFormGroup = (formGroup) => {
    const label = formGroup.querySelector("label");
    const input = formGroup.querySelector("input, textarea");
    const errorContainer = formGroup.querySelector(".error-message");

    let formGroupError = false;
    for (const option of validationOptions) {
      if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
        errorContainer.textContent = option.errorMessage(input, label);
        input.classList.add("invalid");
        formGroupError = true;
      }
    }

    if (!formGroupError) {
      errorContainer.textContent = "";
      input.classList.remove("invalid");
    }
  };

  const validateAllFormGroups = (formToValidate) => {
    const formGroups = Array.from(
      formToValidate.querySelectorAll(".form-group")
    );

    formGroups.forEach((formGroup) => {
      validateSingleFormGroup(formGroup);
    });
  };

  // Disable HTML5 Validation
  formElement.setAttribute("novalidate", "");

  // Only validate form when submitting
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    validateAllFormGroups(formElement);

    if (formElement.checkValidity()) {
      document.querySelector(".submit-success").style.display = "grid";
      document.querySelector("#form").style.display = "none";
    } else {
      console.error("Form invalid!!!")
    }
  });
};

validateForm("#form");
