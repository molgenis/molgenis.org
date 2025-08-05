module Jekyll
  class NormalizeFields < Jekyll::Generator
    safe true
    priority :low  # run after content is loaded

    def generate(site)
      fields_to_normalize = {
        "tool" => "tools",
        "partner" => "partners",
        # Add more field pairs here if needed
      }

      site_collections = site.collections.values.map(&:docs).flatten
      site_docs = site.pages + site.posts.docs + site_collections

      site_docs.each do |doc|
        fields_to_normalize.each do |singular, plural|
          singular_value = doc.data[singular]
          plural_value = doc.data[plural]

          if plural_value.nil? && singular_value
            # Normalize: turn single value into array
            doc.data[plural] = [singular_value].flatten
          elsif plural_value && plural_value.is_a?(String)
            # Just in case someone used a comma-separated string
            doc.data[plural] = plural_value.split(",").map(&:strip)
          end
        end
      end
    end
  end
end
