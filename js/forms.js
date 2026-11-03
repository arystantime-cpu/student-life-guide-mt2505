$(function () {
  function validate(form, trimValues) {
    $(form).find('[required]').each(function () {
      const field = $(this);
      this.setCustomValidity('');
      let value = String(field.val() || '');
      if (this.type !== 'password') {
        value = value.trim();
        if (trimValues) field.val(value);
      }
      if (!value) this.setCustomValidity('Complete this field.');
      const minimum = Number(field.attr('minlength') || 0);
      const maximum = Number(field.attr('maxlength') || Infinity);
      if (value.length < minimum || value.length > maximum) {
        this.setCustomValidity('Check the required length.');
      }
      if (this.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        this.setCustomValidity('Enter a valid email address.');
      }
    });
    if (form.id === 'registration-form') {
      const confirmation = $('#confirm-password')[0];
      if ($('#password').val() !== $('#confirm-password').val()) {
        confirmation.setCustomValidity('Passwords do not match.');
      }
    }
    $(form).find('[required]').each(function () {
      $(this).attr('aria-invalid', String(!this.validity.valid));
    });
    return form.checkValidity();
  }

  $('#contact-form, #registration-form').on('submit', function (event) {
    event.preventDefault();
    const valid = validate(this, true);
    $(this).addClass('was-validated');
    const status = $(this).find('[role="status"]');
    if (valid) {
      const message = this.id === 'contact-form'
        ? 'Demo successful. Your contact form is valid. No message was sent.'
        : 'Demo successful. Your registration is valid. No account was created.';
      status.removeClass('text-danger').addClass('text-success').text(message);
    } else {
      status.removeClass('text-success').addClass('text-danger').text('Please correct the highlighted fields.');
      $(this).find(':invalid').first().trigger('focus');
    }
  });

  $('#contact-form, #registration-form').on('input change', function () {
    $(this).find('[role="status"]').text('');
    if ($(this).hasClass('was-validated')) {
      validate(this);
    }
  });

  $('#registration-form').on('reset', function () {
    $(this).removeClass('was-validated');
    $(this).find('[role="status"]').text('').removeClass('text-success text-danger');
    $(this).find('[required]').removeAttr('aria-invalid').each(function () {
      this.setCustomValidity('');
    });
  });
});
