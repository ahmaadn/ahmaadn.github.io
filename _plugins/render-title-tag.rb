module Jekyll
  class RenderTitleTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      "<div class='code-title'>#{@text}</div>"
    end
  end
end

Liquid::Template.register_tag('code_title', Jekyll::RenderTitleTag)
