/**
 * @file
 * All custom overrides behaviors for the agility summit.
 */

/**
 * This site uses jQuery, so if you can't beat 'em, join 'em.
 */
if (typeof $ === 'function') {
  $(document).ready(function() {
    console.log("ready!");
  });
}
