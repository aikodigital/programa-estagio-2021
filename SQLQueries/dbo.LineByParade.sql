USE [Aiko]
GO

/****** Object:  Table [dbo].[LineByParade]    Script Date: 19/03/2021 17:44:53 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[LineByParade](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[LineId] [int] NOT NULL,
	[ParadeId] [int] NOT NULL,
	[CreatedAt] [datetime] NOT NULL,
	[DisabledAt] [datetime] NULL,
 CONSTRAINT [PK_LineByParade] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[LineByParade] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO

ALTER TABLE [dbo].[LineByParade]  WITH CHECK ADD  CONSTRAINT [FK_LineByParade_LineId] FOREIGN KEY([LineId])
REFERENCES [dbo].[Line] ([Id])
GO

ALTER TABLE [dbo].[LineByParade] CHECK CONSTRAINT [FK_LineByParade_LineId]
GO

ALTER TABLE [dbo].[LineByParade]  WITH CHECK ADD  CONSTRAINT [FK_LineByParade_ParadeId] FOREIGN KEY([ParadeId])
REFERENCES [dbo].[Parade] ([Id])
GO

ALTER TABLE [dbo].[LineByParade] CHECK CONSTRAINT [FK_LineByParade_ParadeId]
GO


