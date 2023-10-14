class Shared::Image < Bridgetown::Component
  def initialize(source:, style: "center")
    @source = source
    @style = style
  end
end
