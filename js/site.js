$(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    $.fx.off = true;
  }

  function welcome() {
    const name = String($('#visitor-name').val() || '').trim();
    $('#welcome-message').text(name ? 'Welcome, ' + name + '! Plan your first week below.' : 'Welcome to AITU! Plan your first week below.');
  }
  $('#visitor-name').on('input', welcome);
  $('#welcome-button').on('click', welcome);
  $('#theme-toggle').on('click', function () {
    $('body').toggleClass('dark-theme');
    const dark = $('body').hasClass('dark-theme');
    $(this).attr('aria-pressed', String(dark)).text(dark ? 'Switch to light theme' : 'Switch to dark theme');
  });

  $('.faq-answer').hide().removeAttr('hidden');
  $('.faq-question').on('click', function () {
    const open = $(this).attr('aria-expanded') === 'true';
    $(this).attr('aria-expanded', String(!open));
    $(this).find('.faq-symbol').text(open ? '+' : '−');
    const answer = $('#' + $(this).attr('aria-controls'));
    answer.stop(true, true);
    if (open) answer.slideUp(180);
    else answer.slideDown(180);
  });

  function filterResources() {
    const search = String($('#resource-search').val() || '').trim().toLowerCase();
    const category = $('#resource-category').val();
    let count = 0;
    $('#resource-list .guide-card').each(function () {
      const matchesText = $(this).find('h3, p').text().toLowerCase().includes(search);
      const matchesCategory = category === 'All' || $(this).attr('data-category') === category;
      const show = matchesText && matchesCategory;
      $(this).prop('hidden', !show);
      if (show) count++;
    });
    $('#result-count').text(count + (count === 1 ? ' result found' : ' results found'));
    $('#no-results').prop('hidden', count !== 0);
  }
  $('#resource-search').on('input', filterResources);
  $('#resource-category').on('change', filterResources);
  $('#clear-filters').on('click', function () {
    $('#resource-search').val('');
    $('#resource-category').val('All');
    filterResources();
    $('#resource-search').trigger('focus');
  });
  if ($('#resource-list').length) filterResources();

  function updateCount() {
    const count = $('#checklist-items li').length;
    $('#item-count').text(count + (count === 1 ? ' item' : ' items'));
    $('#empty-list').prop('hidden', count !== 0);
  }
  $('#checklist-form').on('submit', function (event) {
    event.preventDefault();
    const text = String($('#checklist-input').val() || '').trim();
    if (!text) {
      $('#checklist-feedback').addClass('error-text').text('Enter a task before adding it.');
      $('#checklist-input').attr('aria-invalid', 'true').trigger('focus');
      return;
    }
    const item = $('<li>');
    $('<span>').text(text).appendTo(item);
    $('<button>').attr({type: 'button', 'aria-label': 'Remove ' + text}).addClass('remove-button').text('Remove').appendTo(item);
    $('#checklist-items').append(item);
    $('#checklist-input').val('').removeAttr('aria-invalid').trigger('focus');
    $('#checklist-feedback').removeClass('error-text').text('Added: ' + text);
    $('#task-notice').stop(true, true).text('Task added.').fadeIn(150).delay(1400).fadeOut(300);
    updateCount();
  });
  $('#checklist-input').on('input', function () {
    $(this).removeAttr('aria-invalid');
    $('#checklist-feedback').removeClass('error-text').text('');
  });
  $('#checklist-items').on('click', '.remove-button', function () {
    const item = $(this).closest('li');
    const text = item.find('span').text();
    const nextButton = item.next().find('button');
    item.remove();
    $('#checklist-feedback').removeClass('error-text').text('Removed: ' + text);
    $('#task-notice').stop(true, true).hide();
    updateCount();
    if (nextButton.length) nextButton.trigger('focus');
    else $('#checklist-input').trigger('focus');
  });
});
