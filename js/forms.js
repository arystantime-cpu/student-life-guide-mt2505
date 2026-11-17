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
      if (field.attr('pattern') && value && !new RegExp(field.attr('pattern')).test(value)) {
        this.setCustomValidity('Check the required format.');
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

  $('#contact-form, #registration-form, #login-form').on('submit', function (event) {
    event.preventDefault();
    const valid = validate(this, true);
    $(this).addClass('was-validated');
    const status = $(this).find('[role="status"]');
    
    if (valid) {
      if (this.id === 'registration-form') {
        const user = {
          name: $('#first-name').val() + ' ' + $('#last-name').val(),
          email: $('#registration-email').val(),
          password: $('#password').val(),
          phone: $('#phone').val()
        };
        localStorage.setItem('currentUser', JSON.stringify(user));
        status.removeClass('text-danger').addClass('text-success').text('Registration successful! You can now log in.');
      } else if (this.id === 'login-form') {
        const storedUser = JSON.parse(localStorage.getItem('currentUser'));
        const email = $('#login-email').val();
        const password = $('#login-password').val();

        if (storedUser && storedUser.email === email && storedUser.password === password) {
          localStorage.setItem('isLoggedIn', 'true');
          status.removeClass('text-danger').addClass('text-success').text('Login successful! Redirecting to profile...');
          setTimeout(() => { window.location.href = 'profile.html'; }, 1000);
        } else {
          status.removeClass('text-success').addClass('text-danger').text('Invalid email or password.');
        }
      } else {
        status.removeClass('text-danger').addClass('text-success').text('Message sent successfully!');
      }
    } else {
      status.removeClass('text-success').addClass('text-danger').text('Please correct the highlighted fields.');
      $(this).find(':invalid').first().trigger('focus');
    }
  });

  $('#contact-form, #registration-form, #login-form').on('input change', function () {
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