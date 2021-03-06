# == Schema Information
#
# Table name: projects
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  desc       :string           not null
#  post_url   :string           not null
#  github_url :string
#  live_url   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  slug       :string           not null
#  img_url    :string
#

class Project < ApplicationRecord
    validates(
        :title,
        :desc,
        :post_url,
        :slug,
        presence: true
    )

    validates(
        :title,
        :slug,
        uniqueness: true
    )
end
