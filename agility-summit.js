/**
 * @file
 * All custom overrides behaviors for the agility summit.
 */

/**
 * This site uses jQuery, so if you can't beat 'em, join 'em.
 */
var componentId = '136437'; // The `id="pb-block-XXXXXX"` number of the Video component.

// Grab the URL params and throw in the global scope.
var isEdit = false;
if ('URLSearchParams' in window) {
  const urlParams = new URLSearchParams(window.location.search);

  // Don't run transformation on the edit page.
  if (urlParams.has("edit")) {
    isEdit = true;
  }
}

if (typeof $ === 'function' && !isEdit) {
  $(document).ready(function() {
    // Get the iframe and its wrapper.
    var $iframeBlock = $('#pb-block-' + componentId);

    // Only make a modal and do things if the component exists.
    if ($iframeBlock.length) {
      // Toggle for replacing the iframe on load with a button image.
      var newContents = `<button data-toggle="modal" data-target="#video-modal" class="modal-toggle hover-state button--no-styles">
        <img src="https://solveitonce.com/agility-summit/vlad_bw.jpg" alt="Open the video modal" class="img-fluid" />
      </button>`;

      // New modal on the bottom of the page.
      var videoModal = `<div class="modal content-ready fade" id="video-modal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Vlad's Introduction</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <svg class="svg-inline--fa fa-times-circle fa-w-16 color-red" aria-hidden="true" 
                  data-prefix="far" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 512 512" data-fa-i2svg="">
                  <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"></path>
                </svg>
              </button>
            </div>
            <div class="modal-body">
              <p class="no-margin-bottom"></p>
            </div>
          </div>
        </div>
      </div>`;

      // Put the video modal at the bottom of the page.
      $('body').append(videoModal);

      // Modify the video modal.
      var iframeHtml = $iframeBlock.find('.talk-video-wrapper').html();
      $('#video-modal')
          .find('.modal-body').html(iframeHtml).end();

      // Replace the header iframe with the toggle.
      $('#pb-block-' + componentId).html(newContents);
    }
  });
}
